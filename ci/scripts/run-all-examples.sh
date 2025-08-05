set -e

echo "running all JS examples"
echo "--------------------"

for example in examples/js/*; do
  echo "running $(basename $example .js)"
  node $example
  echo "--------------------"
done
