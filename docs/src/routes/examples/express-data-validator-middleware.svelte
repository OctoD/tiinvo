<script>
  import PrismJs from "$lib/PrismJS.svelte";
</script>

<PrismJs
  code={`
import { Result } from 'tiinvo';

export const validate = (... assertions) => {
  return (req, res, next) => {
    const body = req.body;

    for (let i = 0; i < assertions; i++) {
      const assert = assertions[i];
      const result = assert(body);

      if (Result.isErr(result)) {
        return res.status(400).json(result);
      }
    }
    
    next();
  }
}
  `}
  language="ts"
/>

<PrismJs
  code={`
import { Assert, Array, Object, String, Number } from 'tiinvo';
import { validate } from './validate'
import { Router } from 'express';

const route = Router();

route.post(
  '/', 
  validate(
    Assert.maker(Object.haskeyOf("firstname", String.guard), "Firstname is required and must be a string"),
    Assert.maker(Object.haskeyOf("lastname", String.guard), "Lastname is required and must be a string"),
  ),
  (req, res) => {
    // type is safe, we can store it in a db
  }
)
  `}
  language="ts"
/>
