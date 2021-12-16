import { Job } from ".";
import type { SaveJobOptions } from "../agenda/save-job";
/**
 * Saves a job into the MongoDB
 * @name Job#
 * @function
 * @returns instance of Job resolved after job is saved or errors
 */
export declare const save: (this: Job, opts?: SaveJobOptions | undefined) => Promise<Job>;
//# sourceMappingURL=save.d.ts.map