/**
 *
 * @license
 * Copyright 2017 SAP Ariba
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import {Entity} from '@aribaui/core';

export class ApproverUser implements Entity
{

    uniqueName: string;

    constructor(public id: string, public firstName: string, public  lastName: string,
                public  age: number)
    {

    }

    displayKey(): string
    {
        return this.toString();
    }

    identity(): string
    {
        return this.id;
    }

    getTypes(): any
    {
        //
        return {
            id: String,
            firstName: String,
            lastName: String,
            age: Number

        };
    }

    toString(): string
    {
        return this.firstName + ' ' + this.lastName + '(' + this.age + ')';
    }

    $proto(): ApproverUser
    {
        return new ApproverUser('1', 's', 's', 1);
    }


    className(): string
    {
        return 'ApproverUser';
    }
}
