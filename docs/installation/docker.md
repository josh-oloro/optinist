Docker
=================

```{contents}
:depth: 4
```

## Installation

We introduce how to install optinist.
We have developed optinist python(backend) and typescript(frontend), so you need to make both environment.
Please follow instructions below.

<br />

## 1. Make docker image container

### Install Tools

- Install [Docker](https://www.docker.com/products/docker-desktop/)

### Make docker image

Pull the latest docker image from docker hub.
```
docker pull oistncu/optinist
```
Start docker container.
```bash
docker run -it --shm-size=2G \
-v /your/saving/dir:/app/studio_data \  # Please set your saving directory
--env OPTINIST_DIR="/app/studio_data" \
--name optinist_container -d -p 8000:8000 --restart=unless-stopped \
oistncu/optinist:latest \
python main.py --host 0.0.0.0 --port 8000
```

```{eval-rst}
.. note::
    Please set ``/your/saving/dir`` to your local directory.
    Without this, OptiNiSt's data will lost when you stop docker container or reboot your PC.
    By the command above (``-v`` option), you can mount your local directory to docker container.
```

## 2. Access to backend

- Launch browser, and go to http://localhost:8000

It opens correctly!

Done!
