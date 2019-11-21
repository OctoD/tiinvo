[tiinvo](../README.md) › ["benchmarks/index"](_benchmarks_index_.md)

# External module: "benchmarks/index"

## Index

### Variables

* [benchmarkdir](_benchmarks_index_.md#const-benchmarkdir)
* [benchmarks](_benchmarks_index_.md#const-benchmarks)
* [testsdir](_benchmarks_index_.md#const-testsdir)

## Variables

### `Const` benchmarkdir

• **benchmarkdir**: *string* =  __dirname

*Defined in [benchmarks/index.ts:6](https://github.com/OctoD/tiinvo/blob/32d45ae/src/benchmarks/index.ts#L6)*

___

### `Const` benchmarks

• **benchmarks**: *string[]* =  fs.readdirSync(testsdir)

*Defined in [benchmarks/index.ts:8](https://github.com/OctoD/tiinvo/blob/32d45ae/src/benchmarks/index.ts#L8)*

___

### `Const` testsdir

• **testsdir**: *string* =  path.join(benchmarkdir, "tests")

*Defined in [benchmarks/index.ts:7](https://github.com/OctoD/tiinvo/blob/32d45ae/src/benchmarks/index.ts#L7)*
