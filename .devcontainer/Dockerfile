FROM public.ecr.aws/ubuntu/ubuntu:24.04

ARG DEBIAN_FRONTEND=noninteractive

# install packages
RUN apt-get update -y && apt-get install -y \
    git \
    make \
    unzip \
    curl \
    vim

# configure environment variables
ENV EDITOR=vim

# configure bash aliases
RUN echo "alias ls='ls -alh'" >> /root/.bashrc
RUN echo "alias gco='git checkout'" >> /root/.bashrc
RUN echo "alias gs='git status'" >> /root/.bashrc
RUN echo "alias ga='git add .'" >> /root/.bashrc
RUN echo "alias gc='git commit'" >> /root/.bashrc
