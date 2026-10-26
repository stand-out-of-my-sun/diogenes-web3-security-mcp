import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const manifestPath = path.resolve(__dirname, "../tools_manifest.json");
const tools = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const toolMap = new Map(tools.map(t => [t.name, t]));

test("Manifest Integrity: web3-security declares exactly 15 tools", () => {
  assert.equal(tools.length, 15, "Tool count must match manifest");
});

test("Audit tool schema & hints: audit_smart_contract_code", () => {
  const tool = toolMap.get("audit_smart_contract_code");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: scan_solana_cpi_reentrancy", () => {
  const tool = toolMap.get("scan_solana_cpi_reentrancy");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: evaluate_solana_token_risk", () => {
  const tool = toolMap.get("evaluate_solana_token_risk");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: inspect_solana_token_liquidity", () => {
  const tool = toolMap.get("inspect_solana_token_liquidity");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: track_solana_whale_flows", () => {
  const tool = toolMap.get("track_solana_whale_flows");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: estimate_solana_priority_fees", () => {
  const tool = toolMap.get("estimate_solana_priority_fees");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: decode_eip712_permit_signature", () => {
  const tool = toolMap.get("decode_eip712_permit_signature");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: simulate_evm_transaction_calldata", () => {
  const tool = toolMap.get("simulate_evm_transaction_calldata");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: evaluate_dex_mev_risk", () => {
  const tool = toolMap.get("evaluate_dex_mev_risk");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: detect_address_poisoning_scam", () => {
  const tool = toolMap.get("detect_address_poisoning_scam");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: verify_http402_payment_challenge", () => {
  const tool = toolMap.get("verify_http402_payment_challenge");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: estimate_bitcoin_mempool_fees", () => {
  const tool = toolMap.get("estimate_bitcoin_mempool_fees");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: plan_bitcoin_utxo_consolidation", () => {
  const tool = toolMap.get("plan_bitcoin_utxo_consolidation");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: calculate_spot_swap_rate", () => {
  const tool = toolMap.get("calculate_spot_swap_rate");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

test("Audit tool schema & hints: compare_crosschain_bridge_routes", () => {
  const tool = toolMap.get("compare_crosschain_bridge_routes");
  assert.ok(tool, "Tool must exist");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20);
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  assert.ok(tool.annotations);
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean");
});

