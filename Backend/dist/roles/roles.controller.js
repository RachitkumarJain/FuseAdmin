"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesController = void 0;
const common_1 = require("@nestjs/common");
const roles_service_1 = require("./roles.service");
let RolesController = class RolesController {
    constructor(roleService) {
        this.roleService = roleService;
    }
    getAllRoles() {
        return this.roleService.getAll();
    }
    create(name, permissionsIds) {
        return this.roleService.create({
            name,
            permissions: permissionsIds.map(id => ({ id }))
        });
    }
    async getUser(id) {
        return this.roleService.getSingle({ id }, ['permissions']);
    }
    async updateUser(id, name, ids) {
        await this.roleService.update(id, { name });
        const role = await this.roleService.getSingle({ id });
        return this.roleService.create(Object.assign(Object.assign({}, role), { permissions: ids.map(id => ({ id })) }));
    }
    deleteUser(id) {
        return this.roleService.delete(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "getAllRoles", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('name')),
    __param(1, common_1.Body('permissions')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "create", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "getUser", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body('name')),
    __param(2, common_1.Body('permissions')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Array]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "updateUser", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "deleteUser", null);
RolesController = __decorate([
    common_1.Controller('roles'),
    __metadata("design:paramtypes", [roles_service_1.RolesService])
], RolesController);
exports.RolesController = RolesController;
//# sourceMappingURL=roles.controller.js.map