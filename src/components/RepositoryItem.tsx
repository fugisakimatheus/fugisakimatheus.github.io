import { Repository } from 'store/ducks/repositories/types';
import 'styles/repository-item.scss';

interface OwnProps {
  repository: Repository
}

export default function RepositoryItem({ repository }: OwnProps) {
  return (
    <a id="repository-link" href={repository.html_url} target="_blank">
      <div id="repository-item">
        <strong>{repository.name}</strong>
        {repository.description && <span className="description">{repository.description}</span>}
        {repository.topics && <span className="topics">Tópicos: {repository.topics.join(', ')}</span>}
      </div>
    </a>
  )
}
