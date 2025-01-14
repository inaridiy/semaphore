export default [
    {
        inputs: [
            {
                internalType: "contract ISemaphoreVerifier",
                name: "_verifier",
                type: "address"
            }
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        inputs: [],
        name: "Semaphore__CallerIsNotTheGroupAdmin",
        type: "error"
    },
    {
        inputs: [],
        name: "Semaphore__GroupAlreadyExists",
        type: "error"
    },
    {
        inputs: [],
        name: "Semaphore__GroupDoesNotExist",
        type: "error"
    },
    {
        inputs: [],
        name: "Semaphore__MerkleTreeDepthIsNotSupported",
        type: "error"
    },
    {
        inputs: [],
        name: "Semaphore__MerkleTreeRootIsExpired",
        type: "error"
    },
    {
        inputs: [],
        name: "Semaphore__MerkleTreeRootIsNotPartOfTheGroup",
        type: "error"
    },
    {
        inputs: [],
        name: "Semaphore__YouAreUsingTheSameNillifierTwice",
        type: "error"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "groupId",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "address",
                name: "oldAdmin",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newAdmin",
                type: "address"
            }
        ],
        name: "GroupAdminUpdated",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "groupId",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "merkleTreeDepth",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "zeroValue",
                type: "uint256"
            }
        ],
        name: "GroupCreated",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "groupId",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "oldMerkleTreeDuration",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newMerkleTreeDuration",
                type: "uint256"
            }
        ],
        name: "GroupMerkleTreeDurationUpdated",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "groupId",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "index",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "identityCommitment",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "merkleTreeRoot",
                type: "uint256"
            }
        ],
        name: "MemberAdded",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "groupId",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "index",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "identityCommitment",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "merkleTreeRoot",
                type: "uint256"
            }
        ],
        name: "MemberRemoved",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "groupId",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "index",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "identityCommitment",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newIdentityCommitment",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "merkleTreeRoot",
                type: "uint256"
            }
        ],
        name: "MemberUpdated",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "groupId",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "merkleTreeRoot",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "externalNullifier",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "nullifierHash",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "signal",
                type: "uint256"
            }
        ],
        name: "ProofVerified",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "groupId",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "identityCommitment",
                type: "uint256"
            }
        ],
        name: "addMember",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "groupId",
                type: "uint256"
            },
            {
                internalType: "uint256[]",
                name: "identityCommitments",
                type: "uint256[]"
            }
        ],
        name: "addMembers",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "groupId",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "merkleTreeDepth",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "admin",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "merkleTreeDuration",
                type: "uint256"
            }
        ],
        name: "createGroup",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "groupId",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "merkleTreeDepth",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "admin",
                type: "address"
            }
        ],
        name: "createGroup",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "groupId",
                type: "uint256"
            }
        ],
        name: "getMerkleTreeDepth",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "groupId",
                type: "uint256"
            }
        ],
        name: "getMerkleTreeRoot",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "groupId",
                type: "uint256"
            }
        ],
        name: "getNumberOfMerkleTreeLeaves",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        name: "groups",
        outputs: [
            {
                internalType: "address",
                name: "admin",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "merkleTreeDuration",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "groupId",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "identityCommitment",
                type: "uint256"
            },
            {
                internalType: "uint256[]",
                name: "proofSiblings",
                type: "uint256[]"
            },
            {
                internalType: "uint8[]",
                name: "proofPathIndices",
                type: "uint8[]"
            }
        ],
        name: "removeMember",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "groupId",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "newAdmin",
                type: "address"
            }
        ],
        name: "updateGroupAdmin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "groupId",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "newMerkleTreeDuration",
                type: "uint256"
            }
        ],
        name: "updateGroupMerkleTreeDuration",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "groupId",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "identityCommitment",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "newIdentityCommitment",
                type: "uint256"
            },
            {
                internalType: "uint256[]",
                name: "proofSiblings",
                type: "uint256[]"
            },
            {
                internalType: "uint8[]",
                name: "proofPathIndices",
                type: "uint8[]"
            }
        ],
        name: "updateMember",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "verifier",
        outputs: [
            {
                internalType: "contract ISemaphoreVerifier",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "groupId",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "merkleTreeRoot",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "signal",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "nullifierHash",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "externalNullifier",
                type: "uint256"
            },
            {
                internalType: "uint256[8]",
                name: "proof",
                type: "uint256[8]"
            }
        ],
        name: "verifyProof",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }
] as const
