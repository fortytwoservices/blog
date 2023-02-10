# Amesto Fortytwo blog

This is the repository for the [Fortytwo blog](https://blog.amestofortytwo.com).

# How to contribute to blogposts

Blogpost can be published here: 

To do so, simply follow these steps:
- Find a project you want to contribute to
- Fork it
- Clone it to your local system 
- Make a new branch
- Make your changes
- Push it back to your repo
- Click the Compare & pull request button
- Click Create pull request to open a new pull request
(Read more here: https://opensource.com/article/19/7/create-pull-request-github#:~:text=make%20some%20changes.-,TLDR,-In%20summary%2C%20if)

### Setting up a valid DCO
This message will show up if you do not do it from the beginning, so let's start with it:

```
We'd like to have valid DCO on all commits.

Please fix so that you provide a sign-off on all commits:

- Make sure your version of git is up to date, as there has been noticed some bugs with ssh-signing on older versions of git
- Add your in your GH-account -> settings -> emails (verify it)
- Create an ssh key towards your amesto.no email address: "ssh-keygen -C "my.name@amesto.no" -b 4096"
- Place your public key as a Signing Key in GH-account settings -> SSH and GPG keys
- Update your git config: "git config --global gpg.format ssh" and "git config --global user.signingkey /PATH/TO/.SSH/KEY.PUB"
- when commiting, use the following syntax: "git -a -s -S -m "your commit message here"
- check "git log" to se that it has been signed-off with your amesto.no email account.
```

## Adding a profile
This is a onetime thing that you will refer to in every blog post. After you have cloned the repo. Open it in VSC and locate the folder named "authors".

```
blog/content/authors 
```

Note that the ```avatars``` subfolder contains your profile picture. Add one and name it intuitive and recognizable to you and others. 

Next you will have to set up the profile texts which is directly inside the authors folder. Make a new file (preferrably using the same naming standard as your profilepic) and add the text as shown with your unique entries:

    - id: yourid
    name: Full Name
    initial: INITIALS
    bio: |
        Anything you'd like.
    joined: Month Year
    avatar: ./avatars/YOURPROFILEPIC.jpeg
    sns:
        - [twitter, nickname]
        - [github, nickname]
        - [medium, "@nickname"]
        - [mailto, mailto:username@amesto.no]
        - [url, yourSite.com]

Note that you may delete any of the sns if you don't want to or don't have one of the entries.

## Writing the post

When you are ready to start writing, you need to make a new folder with date and the name of your post: "YYYY-MM-DD-post-name". Inside this folder you should make another folder which you name "media" and a file names index.mdx (important). (recommending the Markdown Paste extension in VSC or faster input of images).

You need to start out the file with an initialisation on title, author etc which will be used to parse the output. This info is also linked to the avatar/profile you created earlier. Here is a template:

```
---
title: Your Title
author:
    - Full Name
date: YYYY-MM-DD
categories :
    - This is an example
    - Another one
description: What is the blog post about? 
    Anything related you should put into a short description.
hero: media/Header-image.jpg
slug: everyday-juggling- act
---
```

```hero``` is the file path to the image that will be your header image of both the overview page with all posts and the header image on the post itself.

```slug``` is the part of the URL that makes it unique to your blogpost, to make you able to have a easy-to-remember link directly to the post.

Continue the post by writing regular markdown to your post.

### Done writing?

Ready to post? Then you need to do a pull request. Look at the link from beginning of this post to find a solution.

## Local runtime / test container

Prerequisites:

- Make, if you want to execute the commands via the Makefile
- Docker to build and run the container

```sh
make build start
```

If you do not have Make and only wish to use Docker; you can run these commands individually.

```sh
# Build the container
docker build -t amestofortytwo/blog --force-rm -f ./Dockerfile .

# Start the container
docker run --rm -p 80:80 amestofortytwo/blog
```

Once built and started, go to localhost in your browser.

## Update routines
1. Delete /node_modules folder
2. Delete package-config.js file
3. Run the following command
```sh
npm install --save-dev gatsby @pitayan/gatsby-theme-pitayan react@18 react-dom@18 --legacy-peer-deps
```
4. Checkin code and do PR
