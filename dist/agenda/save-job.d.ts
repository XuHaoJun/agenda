import { Agenda } from ".";
import { Job, JobAttributes } from "../job";
export interface SaveJobOptions {
    jobToJSON?: (j: Job) => Partial<JobAttributes>;
}
/**
 * Save the properties on a job to MongoDB
 * @name Agenda#saveJob
 * @function
 * @param job job to save into MongoDB
 * @returns resolves when job is saved or errors
 */
export declare const saveJob: (this: Agenda, job: Job, opts?: SaveJobOptions | undefined) => Promise<Job>;
//# sourceMappingURL=save-job.d.ts.map