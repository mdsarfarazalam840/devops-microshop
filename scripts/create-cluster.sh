#!/bin/bash
kind create cluster --name microshop
kubectl cluster-info --context kind-microshop
