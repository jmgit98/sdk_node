/**
 * Tests child workflow timeout from the parent workflow perspective
 * @module
 */

import { childWorkflow } from '@temporalio/workflow';
import { Empty } from '../interfaces';
import { unblockOrCancel } from './unblock-or-cancel';

export const childWorkflowTimeout: Empty = () => ({
  async execute(): Promise<void> {
    const child = childWorkflow(unblockOrCancel, {
      workflowExecutionTimeout: '10ms',
      retryPolicy: { maximumAttempts: 1 },
    });
    await child.execute(); // should time out
  },
});
