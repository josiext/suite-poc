import { uniqId } from "utils/uniqId";
import { pipelineErrorType } from "../entities/pipelineErrorType";
import { stepType } from "../entities/stepType";

function validateStepsOrder(newSteps: stepType[]) {
  const errors: pipelineErrorType[] = [];

  newSteps.forEach((step, index) => {
    if (!step.before.length && !step.after.length) return false;

    const prevSteps = newSteps
      .filter((_, validationStepIndex) => validationStepIndex < index)
      .map((validationStep) => validationStep.code);

    for (const codeStep of step.before) {
      const hasError = prevSteps.includes(codeStep);

      if (hasError)
        errors.push({
          id: uniqId(),
          type: "before",
          code: step.code,
          codeError: codeStep,
        });
    }

    for (const codeStep of step.after) {
      const hasError = !prevSteps.includes(codeStep);

      if (hasError)
        errors.push({
          id: uniqId(),
          type: "after",
          code: step.code,
          codeError: codeStep,
        });
    }
  });

  return errors;
}

export default validateStepsOrder;
