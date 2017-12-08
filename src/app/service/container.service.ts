import {Injectable} from '@angular/core';

@Injectable()
export class ContainerService {
    /**
     *  可以传递 any 类型
     */
    private myData: any;

    /**
     *  设置数据
     * @param data
     */
    public set(data): void {
        this.myData = data;
    }

    /**
     *
     * @returns {any}
     */
    public get(): any {
        return this.myData;
    }
}
