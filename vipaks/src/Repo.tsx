import { useEffect, useState } from "react";
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { getLanguages } from "./services/servicesApi";
import { Repository } from "./types";

const Item = styled(Box)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1.5),
	textAlign: 'left',
	color: theme.palette.text.secondary,
	backgroundColor: '#f5f5f5',
	borderRadius: 10,
}));


export default function Repo({ repo }: { repo: Repository }) {
	const [languages, setLanguages] = useState<any>(null);

	const fetchLanguagData = async () => {
		try {
			const lengData = await getLanguages(repo.languages_url);
			lengData && setLanguages(lengData);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetchLanguagData()
	}, []);

	return (
		<Item key={repo.id}  >
			<Link to={repo.html_url} style={{ color: 'black' }}>
				<Typography variant="body2" sx={{
					mb: 1,
					textAlign: 'center',
					opacity: 0.8,
					'&:hover': {
						opacity: 1,
					},
				}}>{repo.name}</Typography>
			</Link>
			{repo.description &&
				<Typography variant="body2">
					Описание: {repo.description}
				</Typography>}
			{languages &&
				<Typography variant="body2">
					Язык программирования: {Object.keys(languages).join(", ")}
				</Typography>
			}
			<Typography variant="body2">
				Дата создания репозитория: {new Date(repo.created_at).toLocaleDateString()}
			</Typography>
			<Typography variant="body2">
				Ссылка на клонирование репозитория: {repo.clone_url}
			</Typography>
		</Item>
	);
};
