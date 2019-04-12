select rating.rating
from rating
inner join quote ON rating.quote_id=quote.id

where quote.quote_text LIKE $1