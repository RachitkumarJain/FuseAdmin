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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let CommonService = class CommonService {
    constructor(repository) {
        this.repository = repository;
    }
    async getAll(relations = []) {
        return this.repository.find({ relations });
    }
    async paginate(page = 1, relations = []) {
        const take = 10;
        const [data, total] = await this.repository.findAndCount({
            take: take,
            skip: (page - 1) * take,
            relations
        });
        return {
            data: data,
            meta: {
                total: total,
                page: page,
                lastPage: Math.ceil(total / take)
            }
        };
    }
    async create(data) {
        return this.repository.save(data);
    }
    async getSingle(condition, relations = []) {
        return this.repository.findOne(condition, { relations });
    }
    async update(id, data) {
        return this.repository.update(id, data);
    }
    async delete(id) {
        return this.repository.delete(id);
    }
};
CommonService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CommonService);
exports.CommonService = CommonService;
//# sourceMappingURL=common.service.js.map