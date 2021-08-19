import { Repository } from 'typeorm';
import { PaginatedResultInterface } from './paginated-result.interface';
export declare abstract class CommonService {
    protected readonly repository: Repository<any>;
    constructor(repository: Repository<any>);
    getAll(relations?: any[]): Promise<any[]>;
    paginate(page?: number, relations?: any[]): Promise<PaginatedResultInterface>;
    create(data: any): Promise<any>;
    getSingle(condition: any, relations?: any[]): Promise<any>;
    update(id: number, data: any): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
