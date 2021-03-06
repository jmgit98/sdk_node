/**
 * Tests the happy path of starting and awaiting a child workflow
 * @module
 */

import { createChildWorkflowHandle } from '@temporalio/workflow';
import { Returner } from '../interfaces';
import { successString } from './success-string';

export const childWorkflowInvoke: Returner<{ workflowId: string; runId: string; execResult: string; result: string }> =
  () => ({
    async execute() {
      const child = createChildWorkflowHandle(successString);
      const execResult = await createChildWorkflowHandle(successString).execute();
      return { workflowId: child.workflowId, runId: await child.start(), result: await child.result(), execResult };
    },
  });
