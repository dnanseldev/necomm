# Set local environment to project
> ws=/home/stone/Projects/necomm && export ws

> routes=/home/stone/Projects/necomm/src/infra/routes && export routes

# --------DOCKER ----------------
# Connect do docker hub
> docker login

# Build an image docker
> docker build . --network=host -t danstonebuilt/necomm:1.0.0

# Push an image to repository
> docker push danstonebuilt/necomm:1.0.0

# -------KUBERNETS ----------------
# Create deployment
> k create deployment k8s-necomm-dep --image=danstonebuilt/necomm:1.0.0

# Create services
> k expose deployment k8s-necomm-dep --port=5000


# Conect to mikikube
> minikube ip
> ssh docker@192.168.59.100

# Password: tcuser

# Regenerate SSH file if some troube happens
 # ssh-keygen -R <host>
> ssh-keygen -R 192.168.59.100

# Fix git changed password
> git config --global --unset user.password
> git config --global --add user.password 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

