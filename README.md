`docker build . -t gcr.io/vital-pillar-328717/node_app:1.9`

`docker push gcr.io/vital-pillar-328717/node_app:1.9`

`gcloud redis instances create redis1 --region europe-central2`

`gcloud redis instances describe redis1 --region europe-central2`

Read host property.

`gcloud compute networks vpc-access connectors \
  create my-vpc-connector \
  --network default \
  --region europe-central2 \
  --range 10.8.0.0/28`

`gcloud run deploy cloud-run-app \
  --image gcr.io/[PROJECT_ID]/cloud-run-app \
  --max-instances 1 \
  --platform managed \
  --region us-central1 \
  --vpc-connector my-vpc-connector \
  --allow-unauthenticated \
  --set-env-vars "REDIS_IP=[IP_ADDRESS]"`