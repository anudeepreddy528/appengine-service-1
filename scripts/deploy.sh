source ./scripts/env.sh &&
echo "$_DEV_CONFIG" &&
echo "$_PROD_CONFIG" &&
gcloud app deploy "$_DEV_CONFIG" -v="$_VERSION"