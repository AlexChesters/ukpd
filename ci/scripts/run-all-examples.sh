set -e

echo "running all examples"
echo "--------------------"

for example in examples/*; do
  echo "running $(basename $example .js)"
  node $example
  echo "--------------------"
done
