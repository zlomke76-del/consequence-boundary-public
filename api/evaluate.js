export default function handler(req, res) {
  return res.status(200).json({
    decision: "observe",
    boundary: "execution",
    admissibility: "requires_runtime_validation"
  });
}
