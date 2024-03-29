/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import { RiHeartAddLine } from "react-icons/ri";
import { TbHeartMinus } from "react-icons/tb";

export const MovieList = (props) => {
	const { movies, addToFavorites, favorites, removeFavoriteMovie } = props;
	return (
		<div className="row nowrap ">
			{movies.map((movie) => {
				return (
					<Card
						className="pt-3 m-3"
						key={movie.imdbID}
						style={{ width: "18rem" }}
					>
						<Card.Img variant="top" src={movie.Poster} />
						<Card.Body className="d-flex align-items-center justify-content-between">
							<Card.Title>
								{movie.Title} ({movie.Year})
							</Card.Title>
							{favorites.some(
								(favorite) => favorite.imdbID == movie.imdbID
							) ? (
								<TbHeartMinus
									className="like-icon"
									onClick={() => removeFavoriteMovie(movie)}
								/>
							) : (
								<RiHeartAddLine
									onClick={() => addToFavorites(movie)}
									className="like-icon"
								/>
							)}
						</Card.Body>
					</Card>
				);
			})}
		</div>
	);
};