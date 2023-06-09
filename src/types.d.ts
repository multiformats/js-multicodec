export type Multicodec = {
    name:        string;
    tag:         Tag;
    code:        string;
    status:      Status;
    description: string;
}

export type Status = "permanent" | "draft" | "deprecated";

export type Tag = "multihash" | "cid" | "multiaddr" | "hash" | "namespace" | "multiformat" | "serialization" | "ipld" | "key" | "libp2p" | "transport" | "encryption" | "softhash" | "zeroxcert" | "varsig" | "filecoin" | "holochain";
