export function CrmPreview({ label }: { label: string }) {
  return (
    <div className="crm-preview">
      <img
        src="/brand/crm-dossier.jpg"
        alt={label}
        className="crm-preview-image"
        draggable={false}
      />
    </div>
  );
}
