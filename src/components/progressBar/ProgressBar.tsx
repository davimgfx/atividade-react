import './ProgressBar.css';

export interface ProgressProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressProps) {
  return (
    <div className="container">
      <div className="progress-bar">
        <div className="progress-bar__fill" style={{ width: `${progress}%` }} />
      </div>
      <span>{progress}%</span>
    </div>
  );
}
