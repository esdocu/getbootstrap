#!/usr/bin/env python3
import os
import re
import shutil

def clear_directory(path):
    """
    Deletes all files and subdirectories inside the specified directory,
    but keeps the directory itself.
    """
    print(f"Clearing contents of directory: {path}")
    if not os.path.exists(path):
        os.makedirs(path, exist_ok=True)
        return

    for filename in os.listdir(path):
        file_path = os.path.join(path, filename)
        try:
            if os.path.isfile(file_path) or os.path.islink(file_path):
                os.unlink(file_path)
            elif os.path.isdir(file_path):
                shutil.rmtree(file_path)
        except Exception as e:
            print(f"Failed to delete {file_path}. Reason: {e}")

def get_latest_version(tags_path):
    """
    Analyzes the tags directory and returns the folder name corresponding
    to the latest bootstrap version.
    """
    if not os.path.exists(tags_path):
        print(f"Tags directory does not exist: {tags_path}")
        return None

    versions = []
    for item in os.listdir(tags_path):
        item_path = os.path.join(tags_path, item)
        if os.path.isdir(item_path):
            versions.append(item)

    if not versions:
        print("No versions found in tags directory.")
        return None

    def version_key(version_str):
        # Remove leading 'v' or 'V'
        s = version_str.lower()
        if s.startswith('v'):
            s = s[1:]
        # Split by typical version separators: dash, dot, or underscore
        parts = re.split(r'[-._]', s)
        key = []
        for p in parts:
            try:
                key.append(int(p))
            except ValueError:
                key.append(p)
        return key

    versions.sort(key=version_key)
    latest = versions[-1]
    print(f"Identified versions: {versions}")
    print(f"Latest version: {latest}")
    return latest

def copy_tree_contents(src, dst):
    """
    Recursively copies the contents of src directory to dst directory.
    If a subdirectory already exists in dst, it merges/overwrites its contents recursively.
    """
    os.makedirs(dst, exist_ok=True)
    for item in os.listdir(src):
        s = os.path.join(src, item)
        d = os.path.join(dst, item)
        if os.path.isdir(s):
            if os.path.exists(d):
                copy_tree_contents(s, d)
            else:
                shutil.copytree(s, d)
        else:
            shutil.copy2(s, d)

def main():
    # Dynamically determine paths relative to this script's directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    base_dir = os.path.dirname(script_dir)

    public_dir = os.path.join(base_dir, "public")
    tags_dir = os.path.join(base_dir, "tags")
    static_tags_dir = os.path.join(base_dir, "static-tags")

    print("--- STARTING DEPLOYMENT PROCESS ---")
    print(f"Base Repository Path: {base_dir}")

    # 1. Clear the public directory
    clear_directory(public_dir)

    # 2. Get the latest version from tags and copy its site/dist to public
    latest_version = get_latest_version(tags_dir)
    if not latest_version:
        print("Error: Could not determine the latest version. Aborting.")
        return

    src_dist_dir = os.path.join(tags_dir, latest_version, "site", "dist")
    print(f"Copying build artifacts from latest tag '{latest_version}': {src_dist_dir} -> {public_dir}")
    
    if not os.path.exists(src_dist_dir):
        print(f"Error: Build output directory does not exist: {src_dist_dir}")
        print("Please build the site in the tag directory first (e.g., run npm run astro-build).")
        return

    copy_tree_contents(src_dist_dir, public_dir)
    print("Successfully copied build artifacts.")

    # 3. Copy all directories from static-tags to public/docs
    docs_dir = os.path.join(public_dir, "docs")
    print(f"Copying static tags into: {docs_dir}")
    
    if not os.path.exists(docs_dir):
        print(f"Warning: {docs_dir} did not exist, creating it now.")
        os.makedirs(docs_dir, exist_ok=True)

    if os.path.exists(static_tags_dir):
        copied_static_dirs = 0
        for item in os.listdir(static_tags_dir):
            item_path = os.path.join(static_tags_dir, item)
            if os.path.isdir(item_path):
                dest_path = os.path.join(docs_dir, item)
                print(f"Copying static tag '{item}' -> {dest_path}")
                if os.path.exists(dest_path):
                    shutil.rmtree(dest_path)
                shutil.copytree(item_path, dest_path)
                copied_static_dirs += 1
        print(f"Successfully copied {copied_static_dirs} static-tag directories.")
    else:
        print(f"Warning: static-tags directory does not exist: {static_tags_dir}")

    print("--- DEPLOYMENT PROCESS COMPLETED SUCCESSFULLY ---")

if __name__ == "__main__":
    main()
