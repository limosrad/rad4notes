
const LEARNING_TYPES = new Set([
  'trivia',
  'differentials',
  'mcq',
]);

/**
 * Remark plugin for Rad4Notes learning blocks.
 *
 * Supported directives:
 *
 * :::trivia
 * Important examination facts.
 * :::
 *
 * :::differentials
 * Differential diagnoses.
 * :::
 *
 * :::mcq{answer="2"}
 * **Question**
 *
 * 1. Option A
 * 2. Option B
 * 3. Option C
 *
 * **Explanation:** Explanation text.
 * :::
 */

export function remarkLearningBlocks() {
  return (tree, file) => {

    function transform(node) {
      if (!node || typeof node !== 'object') {
        return;
      }

      if (
        node.type === 'containerDirective' &&
        LEARNING_TYPES.has(node.name)
      ) {
        node.data ??= {};

        // Base HTML properties
        const properties = {
          className: [
            'rad-learning-block',
            `rad-learning-block--${node.name}`,
          ],
          'data-learning-type': node.name,
        };

        // Validate and store MCQ answer metadata
        if (node.name === 'mcq') {
          const answer = node.attributes?.answer;

          const answerNumber = Number(answer);

          if (
            answer === undefined ||
            !/^[1-9]\d*$/.test(answer) ||
            !Number.isSafeInteger(answerNumber)
          ) {
            file.fail(
              'MCQ directive requires a valid positive integer answer attribute, e.g. :::mcq{answer="2"}.',
              node
            );
          }

          properties['data-correct-answer'] = String(answerNumber);
        }

        // Convert directive into an HTML div
        node.data.hName = 'div';
        node.data.hProperties = properties;
      }

      // Recursively process child nodes
      if (Array.isArray(node.children)) {
        for (const child of node.children) {
          transform(child);
        }
      }
    }

    transform(tree);
  };
}
