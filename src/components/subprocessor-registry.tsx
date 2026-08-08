const columns = ["Provider", "Legal Entity", "Service", "Purpose", "Data Categories", "Processing Region", "Transfer Mechanism", "Privacy / DPA", "Status", "Date Added"];

export function SubprocessorRegistry() {
  return <section className="subprocessor-registry" aria-labelledby="registry-title"><header><div><span className="system-label">Controlled register</span><h2 id="registry-title">Verified subprocessors</h2></div><button disabled title="Notification service is not yet active">Subscribe to Subprocessor Updates — planned</button></header><div className="registry-scroll"><table><thead><tr>{columns.map((column) => <th key={column}>{column}</th>)}</tr></thead><tbody><tr><td colSpan={columns.length}>No provider record is published until every registry field and contractual link has been verified. No absence-of-processing claim is implied.</td></tr></tbody></table></div></section>;
}
