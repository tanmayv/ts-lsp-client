import { spawn } from 'child_process';
import { JSONRPCEndpoint } from './jsonRpcEndpoint';
import { LspClient } from './lspClient';
import { ClientCapabilities } from './models';

const clangd = spawn('clangd', []);
const e: JSONRPCEndpoint = new JSONRPCEndpoint(clangd.stdin, clangd.stdout);
const client = new LspClient(e);
const capabilities: ClientCapabilities = {
    'textDocument': {
        'codeAction': { 'dynamicRegistration': true },
        'codeLens': { 'dynamicRegistration': true },
        'colorProvider': { 'dynamicRegistration': true },
        'completion': {
            'completionItem': {
                'commitCharactersSupport': true,
                'documentationFormat': ['markdown', 'plaintext'],
                'snippetSupport': true
            },
            'completionItemKind': {
                'valueSet': [1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    19,
                    20,
                    21,
                    22,
                    23,
                    24,
                    25]
            },
            'contextSupport': true,
            'dynamicRegistration': true
        },
        'definition': { 'dynamicRegistration': true },
        'documentHighlight': { 'dynamicRegistration': true },
        'documentLink': { 'dynamicRegistration': true },
        'documentSymbol': {
            'dynamicRegistration': true,
            'symbolKind': {
                'valueSet': [1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    19,
                    20,
                    21,
                    22,
                    23,
                    24,
                    25,
                    26]
            }
        },
        'formatting': { 'dynamicRegistration': true },
        'hover': {
            'contentFormat': ['markdown', 'plaintext'],
            'dynamicRegistration': true
        },
        'implementation': { 'dynamicRegistration': true },
        'onTypeFormatting': { 'dynamicRegistration': true },
        'publishDiagnostics': { 'relatedInformation': true },
        'rangeFormatting': { 'dynamicRegistration': true },
        'references': { 'dynamicRegistration': true },
        'rename': { 'dynamicRegistration': true },
        'signatureHelp': {
            'dynamicRegistration': true,
            'signatureInformation': { 'documentationFormat': ['markdown', 'plaintext'] }
        },
        'synchronization': {
            'didSave': true,
            'dynamicRegistration': true,
            'willSave': true,
            'willSaveWaitUntil': true
        },
        'typeDefinition': { 'dynamicRegistration': true }
    },
    'workspace': {
        'applyEdit': true,
        'configuration': true,
        'didChangeConfiguration': { 'dynamicRegistration': true },
        'didChangeWatchedFiles': { 'dynamicRegistration': true },
        'executeCommand': { 'dynamicRegistration': true },
        'symbol': {
            'dynamicRegistration': true,
            'symbolKind': {
                'valueSet': [1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    19,
                    20,
                    21,
                    22,
                    23,
                    24,
                    25,
                    26]
            }
        }, 'workspaceEdit': { 'documentChanges': true },
        'workspaceFolders': true
    }
}

const root_uri = 'file:////random/folder'
const workspaceFolders = [{ 'name': 'my-workspace', 'uri': root_uri }]

async function main() {
    const r = await client.initialize({
        processId: -1,
        rootPath: '.',
        rootUri: null,
        capabilities: capabilities,
        trace: 'off',
        workspaceFolders: workspaceFolders
    });
    console.log(r);
    await client.initialized();
}

main();