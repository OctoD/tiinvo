import Benchmark from "benchmark";
import fs from "fs";
import path from "path";
import { Maybe } from "../src";

const benchmarkdir = __dirname;
const testsdir = path.join(benchmarkdir, "tests");
const benchmarks = fs.readdirSync(testsdir);

benchmarks.forEach(mark => {
  const modpath = path.join(testsdir, mark);
  const mod = require(modpath);

  Maybe(mod.run).cata({
    Nothing: () =>
      console.warn(`Benchmark run not found for benchmark ${mark}`),
    Just: run => run(new Benchmark.Suite(), { async: false })
  });
});
