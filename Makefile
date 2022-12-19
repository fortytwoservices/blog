build:
	docker build -t amestofortytwo/blog --force-rm -f ./Dockerfile .

start:
	docker run --rm -p 80:80 amestofortytwo/blog