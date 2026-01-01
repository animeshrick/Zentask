Fill every single folder with ```.gitkeep``` empty file.
```find . -type d -empty -exec touch {}/.gitkeep \;```

To create a file
```touch routes.ts```

To delete a single file, use rm followed by the filename:
```rm index.ts```

If the folder contains files or other subfolders, rmdir won't work.[2] You must use the recursive flag (-r):
```rm -r folder_name```
