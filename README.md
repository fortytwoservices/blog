# Amesto Fortytwo blog

This is the repository for the [Fortytwo blog](https://blog.amestofortytwo.com).

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