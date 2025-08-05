set -e

echo "running all JS examples"
echo "--------------------"

for example in examples/js/*; do
  echo "running $(basename $example .js)"
  node $example
  echo "--------------------"
done

echo "running all TS examples"
echo "--------------------"

for example in examples/ts/*; do
  echo "running $(basename $example .ts)"
  npx ts-node $example
  echo "--------------------"
done
