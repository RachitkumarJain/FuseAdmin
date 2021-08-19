import { RolesService } from './roles.service';
export declare class RolesController {
    private roleService;
    constructor(roleService: RolesService);
    getAllRoles(): Promise<any[]>;
    create(name: string, permissionsIds: number[]): Promise<any>;
    getUser(id: number): Promise<any>;
    updateUser(id: number, name: string, ids: number[]): Promise<any>;
    deleteUser(id: number): Promise<import("typeorm").DeleteResult>;
}
