export declare const TESTNET: {
    PREFIX: string;
    SCRIPTS: {
        SECP256K1_BLAKE160: {
            CODE_HASH: string;
            HASH_TYPE: "type";
            TX_HASH: string;
            INDEX: string;
            DEP_TYPE: "depGroup";
            SHORT_ID: number;
        };
        SECP256K1_BLAKE160_MULTISIG: {
            CODE_HASH: string;
            HASH_TYPE: "type";
            TX_HASH: string;
            INDEX: string;
            DEP_TYPE: "depGroup";
            SHORT_ID: number;
        };
        DAO: {
            CODE_HASH: string;
            HASH_TYPE: "type";
            TX_HASH: string;
            INDEX: string;
            DEP_TYPE: "code";
        };
        SUDT: {
            CODE_HASH: string;
            HASH_TYPE: "type";
            TX_HASH: string;
            INDEX: string;
            DEP_TYPE: "code";
        };
        ANYONE_CAN_PAY: {
            CODE_HASH: string;
            HASH_TYPE: "type";
            TX_HASH: string;
            INDEX: string;
            DEP_TYPE: "depGroup";
            SHORT_ID: number;
        };
        OMNILOCK: {
            CODE_HASH: string;
            HASH_TYPE: "type";
            TX_HASH: string;
            INDEX: string;
            DEP_TYPE: "code";
        };
    };
};
export declare const MAINNET: {
    PREFIX: string;
    SCRIPTS: {
        SECP256K1_BLAKE160: {
            CODE_HASH: string;
            HASH_TYPE: "type";
            TX_HASH: string;
            INDEX: string;
            DEP_TYPE: "depGroup";
            SHORT_ID: number;
        };
        SECP256K1_BLAKE160_MULTISIG: {
            CODE_HASH: string;
            HASH_TYPE: "type";
            TX_HASH: string;
            INDEX: string;
            DEP_TYPE: "depGroup";
            SHORT_ID: number;
        };
        DAO: {
            CODE_HASH: string;
            HASH_TYPE: "type";
            TX_HASH: string;
            INDEX: string;
            DEP_TYPE: "code";
        };
        SUDT: {
            CODE_HASH: string;
            HASH_TYPE: "type";
            TX_HASH: string;
            INDEX: string;
            DEP_TYPE: "code";
        };
        ANYONE_CAN_PAY: {
            CODE_HASH: string;
            HASH_TYPE: "type";
            TX_HASH: string;
            INDEX: string;
            DEP_TYPE: "depGroup";
            SHORT_ID: number;
        };
        OMNILOCK: {
            CODE_HASH: string;
            HASH_TYPE: "type";
            TX_HASH: string;
            INDEX: string;
            DEP_TYPE: "code";
        };
    };
};
export { 
/**
 * @deprecated Use {@link TESTNET} or {@link MAINNET} instead.
 */
predefined, type Config, type ScriptConfig, type ScriptConfigs, createConfig, generateGenesisScriptConfigs, validateConfig, initializeConfig, getConfig, } from "@ckb-lumos/config-manager";
//# sourceMappingURL=config.d.ts.map