/**
 * @class JobController - Controller for jobs
 */
class JobController {
    /**
   * @constructor Constructor of JobController
   */
    constructor() {
        this.fetcher = jobFetcher;
    }

    /**
   * List all jobs
   * @returns {Array} Job
   */
    async all() {
        const data = await this.fetcher.all();
        const objs = data.map(d => new Company(d));
        return objs;
    }

    /**
   * Filter by Title
   */
    async filterByTitle(title){   
        let data = await this.fetcher.all();
        let objs = data.map(d => new Job(d));
        objs = objs.filter(jobs => (jobs.props.title === title));
        return objs;
    }

    /**
   * Filter by Salary
   */
    async filterBySalary(salary){   
        let data = await this.fetcher.all();
        let objs = data.map(d => new Job(d));
        objs = objs.filter(jobs => (jobs.props.salary === salary));
        return objs;
    }

    /**
   * Filter by StartDate
   */
    async filterByStartDate(startDate){   
        let data = await this.fetcher.all();
        let objs = data.map(d => new Job(d));
        objs = objs.filter(jobs => (jobs.props.startDate === startDate));
        return objs;
    }
}