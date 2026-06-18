import os
import re

CSV_FILE = "/Users/fabian/Documents/CodeProjects/github.com/esdocu/getbootstrap/material/Pages_and_screens_Page_path_and_screen_class.csv"
BANNER_FILE = "/Users/fabian/Documents/CodeProjects/github.com/esdocu/getbootstrap/tags/v5-3-8/site/src/components/shortcodes/VeoBibleBanner.astro"
DOCS_DIR = "/Users/fabian/Documents/CodeProjects/github.com/esdocu/getbootstrap/tags/v5-3-8/site/src/content/docs"
INDEX_ASTRO = "/Users/fabian/Documents/CodeProjects/github.com/esdocu/getbootstrap/tags/v5-3-8/site/src/pages/index.astro"

def get_verse_ids():
    with open(BANNER_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
    # Match verse IDs
    matches = re.finditer(r"('[a-zA-Z0-9\-]+'):\s*\{", content)
    ids = [m.group(1).strip("'") for m in matches]
    return ids

def main():
    verse_ids = get_verse_ids()
    print(f"Total verse IDs available: {len(verse_ids)}")
    
    with open(CSV_FILE, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    urls = []
    for line in lines:
        if line.startswith('#') or line.startswith('Page path'):
            continue
        parts = line.split(',')
        if len(parts) > 1 and parts[0].strip():
            urls.append(parts[0].strip())
            
    # Take top 40
    urls = urls[:40]
    
    # We need to assign 1 banner to home, 2 to the top 30 others, 1 to the rest 9
    allocations = {}
    remaining_2_banners = 30
    for u in urls:
        if u == '/':
            allocations[u] = 1
        elif remaining_2_banners > 0:
            allocations[u] = 2
            remaining_2_banners -= 1
        else:
            allocations[u] = 1

    used_verses = 0
    
    for u in urls:
        count = allocations[u]
        ids_to_use = verse_ids[used_verses:used_verses+count]
        used_verses += count
        
        if u == '/':
            # Update index.astro
            with open(INDEX_ASTRO, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Remove any existing
            content = re.sub(r'<VeoBibleBanner[^>]*>\s*', '', content)
            
            if "import VeoBibleBanner" not in content:
                parts = content.split('---\n')
                if len(parts) >= 3:
                    parts[1] += "import VeoBibleBanner from '@components/shortcodes/VeoBibleBanner.astro'\n"
                    content = '---\n'.join(parts)
            
            banner_tag = f'<VeoBibleBanner id="{ids_to_use[0]}" />\n    '
            content = content.replace('<GetStarted />', banner_tag + '<GetStarted />')
            with open(INDEX_ASTRO, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated index.astro with {ids_to_use[0]}")
            continue
            
        # Parse docs url
        # e.g., /docs/5.3/getting-started/introduction/
        m = re.match(r'^/docs/[\d\.]+/(.*?)/?$', u)
        if not m:
            print(f"URL format not recognized: {u}")
            continue
        
        rel_path = m.group(1)
        if not rel_path:
            rel_path = "index"
            
        # find file
        mdx_path = os.path.join(DOCS_DIR, rel_path + '.mdx')
        md_path = os.path.join(DOCS_DIR, rel_path + '.md')
        
        target_path = mdx_path if os.path.exists(mdx_path) else md_path if os.path.exists(md_path) else None
        if not target_path:
            print(f"File not found for {u} (tried {mdx_path} and {md_path})")
            continue
            
        with open(target_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Remove existing banners to avoid duplicates
        content = re.sub(r'\n*<VeoBibleBanner[^>]*/>\n*', '\n\n', content)
            
        # Insert banners
        banner_1 = f'\n\n<VeoBibleBanner id="{ids_to_use[0]}" />\n\n'
        if '<EsdocuBanner />' in content:
            content = content.replace('<EsdocuBanner />', f'<EsdocuBanner />{banner_1}', 1)
        elif '<WordsusBanner />' in content:
            content = content.replace('<WordsusBanner />', f'<WordsusBanner />{banner_1}', 1)
        else:
            # after frontmatter
            parts = content.split('---\n', 2)
            if len(parts) == 3:
                parts[2] = banner_1 + parts[2]
                content = '---\n'.join(parts)
            else:
                content = banner_1 + content
                
        if count == 2:
            banner_2 = f'\n<VeoBibleBanner id="{ids_to_use[1]}" />\n\n'
            # find all ## headers
            sections = content.split('\n## ')
            if len(sections) > 2:
                # insert before the middle section
                mid = len(sections) // 2
                sections[mid] = banner_2 + sections[mid]
                content = '\n## '.join(sections)
            else:
                # if not enough headers, just append
                content += banner_2

        # Fix multiple newlines safely
        content = re.sub(r'\n{3,}', '\n\n', content)

        with open(target_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {target_path} with {count} banners")

    print(f"\nTotal banners assigned: {used_verses}")

if __name__ == '__main__':
    main()
