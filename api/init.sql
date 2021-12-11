create table urls (
	id serial,
	alias character varying (20),
	url text
);

create unique index urls_alias ON urls (alias);