(each-platforms-for-developer)=
Each Platforms for Developer
=================

```{contents}
:depth: 4
```

## Installation

We introduce how to install optinist for developer.
We have developed optinist python(backend) and typescript(frontend), so you need to make both environment.
Please follow instructions below.

## 1. Make backend environment

### Install Tools

- Unix-like platforms
  - Linux
    - [Install Tools](linux.md#install-tools)
  - Windows WSL
    - [Install Tools](windows.md#install-tools-1)
  - Mac
    - [Install Tools](mac.md#install-tools)
- Windows
    - [Install Tools](windows.md#install-tools)

#### Install Node.js

Get node with version 16 or 18
- [Node.js Official](https://nodejs.org/ja)
- version 20 is not supported yet.

You can also install node via [nvm](https://github.com/nvm-sh/nvm)

After install node, install yarn.
```bash
npm install -g yarn
```

### Clone repository

```
git clone https://github.com/oist/optinist.git
cd ./optinist
```

### Create anaconda environment

```
conda create -n optinist_dev python=3.8
conda activate optinist_dev
```

```
conda config --set channel_priority strict
```

### Install requirements

```
pip install -e '.[dev]'
```

If you will make PRs, please see the [](Contributing) section.

### Set saving directory

Optinist default saving directory is `/tmp/studio`. If you reboot your PC, this repogitory content is deleted. And setting the saving directory in environment path.
```
export OPTINIST_DIR="your_saving_dir"
```

<!--
### 2. Create virtualenv

Under maintenance...
-->

## 2. Run backend

```
python main.py
```
- `python main.py` log is as blow:
```
$ run_optinist
INFO:     Will watch for changes in these directories: ['/home/oist/optinist/backend']
INFO:     Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)
INFO:     Started reloader process [6520] using statreload
INFO:     Started server process [6557]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

- If you won't develop the frontend code, launch browser and go to http://localhost:8000

## 3. Run frontend

Open new terminal window, and go to `frontend` directory.

```
# from optinist root directory
cd frontend
```

Then install packages and run.
```
yarn install
yarn start
```

- Launch browser, and go to http://localhost:3000

```{eval-rst}
.. note::
    frontend in development environment uses port 3000,
    while production optinist uses 8000.
```

It opens correctly!

Done!
