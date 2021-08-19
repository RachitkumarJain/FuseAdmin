import { CommonService } from 'src/common/common.service';
import { Repository } from 'typeorm';
import { Role } from './role.entit';
export declare class RolesService extends CommonService {
    private readonly roleRepository;
    constructor(roleRepository: Repository<Role>);
}
