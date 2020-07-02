set -e

echo "running all examples"
echo "--------------------"

for example in examples/*; do
  node $example
done
