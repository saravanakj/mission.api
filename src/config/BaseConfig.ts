/****************************************************************************************
************Sequelize Database (MSSQL/MYSQL/ORACAL) Config Option Interface *************
****************************************************************************************/
export interface Options {
    host: string;
    port: number;
    dialect: string;
    logging: boolean | Function;
    force: boolean;
    timezone: string;
}
export interface DatabaseConfig {
    UserName: string;
    Password: string;
    Database: string;
    Options: Options;
}
export interface SqlLoggingConfig {
    file: {
        level: string,
        filename: string,
        handleExceptions: boolean,
        json: boolean,
        maxsize: number,
        maxFiles: number,
        colorize: boolean
    };
    console: {
        level: string,
        handleExceptions: boolean,
        json: boolean,
        colorize: boolean
    };
    directory: string;
}

/****************************************************************************************
************************ Web Server Config Interface ************************************
****************************************************************************************/
import {Response } from 'express-serve-static-core';

export interface IStaticFileConfig {
    dotfiles: string;
    etag: boolean;
    extensions: Array<string>;
    index: boolean | Array<string>;
    maxAge: string;
    redirect: boolean;
    setHeaders: (res: Response, path: string, stat: any) => any;
}

export interface IWebServerConfig {
    ApiPort: number;
    IsHttpsEnabled?: boolean;
    HttpsCertificatepath?: string;
    HttpsKeypath?: string;
}


/****************************************************************************************
************************ Entier Application Config **************************************
****************************************************************************************/
export interface IApplicationConfig {
    AppBase: string;
    ApiPort: number;
    IsHttpsEnabled: boolean;
    HttpsCertificatepath: string;
    HttpsKeypath: string;
    DefaultPageSize: number;
    WebBasePath: string;
    DocsBasepath: string;
    WebStaticFile: IStaticFileConfig;
}
/****************************************************************************************
************************ Redis Servce Config - (for Cache & Pub/Sub) ********************
****************************************************************************************/
export interface IRedisConfig {
    auth: string;
    host: string;
    keys_pattern: string;
    name: string;
    namespace_separator: string;
    port: number;
    ssh_port: number;
    timeout_connect: number;
    timeout_execute: number;
    db: number;
}

/****************************************************************************************
************************************* Cache Policies ************************************
****************************************************************************************/

export interface ICachingPolicy {
    Expire: number;
    //TODO: Need to Add more fields.
}

export interface ICachingPolicyDict {
    Default: ICachingPolicy;
    ShortTime: ICachingPolicy;
    Average: ICachingPolicy;
    LongTime: ICachingPolicy;
    [key: string]: ICachingPolicy;
}

/****************************************************************************************
************************************* Session Config ************************************
****************************************************************************************/

import {Request, CookieOptions } from 'express-serve-static-core';
export interface SessionOptions {
    secret: string;
    name?: string;
    store?: any; //Store | MemoryStore;
    cookie?: CookieOptions;
    genid?: (req: Request) => string;
    rolling?: boolean;
    resave?: boolean;
    proxy?: boolean;
    saveUninitialized?: boolean;
    unset?: string;
}

