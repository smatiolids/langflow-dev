"""Update the columns that need to change their type to text

Revision ID: 0ae3a2674f32
Revises: d2d475a1f7c0
Create Date: 2024-10-04 17:30:12.924809

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
import sqlmodel
from sqlalchemy.engine.reflection import Inspector
from langflow.utils import migration
from sqlalchemy.dialects import sqlite

# revision identifiers, used by Alembic.
revision: str = '0ae3a2674f32'
down_revision: Union[str, None] = 'd2d475a1f7c0'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None

def upgrade() -> None:
    conn = op.get_bind()
    # ### commands auto generated by Alembic - please adjust! ###
    inspector = Inspector.from_engine(conn)  # type: ignore

    with op.batch_alter_table("vertex_build", schema=None) as batch_op:
        if migration.column_exists(table_name="vertex_build", column_name="params", conn=conn):
            columns = inspector.get_columns("vertex_build")
            params_column = next((column for column in columns if column["name"] == "params"), None)
            if params_column is not None and isinstance(params_column["type"], sa.VARCHAR):
                batch_op.alter_column(
                    "params", existing_type=sa.VARCHAR(), type_=sa.Text(), existing_nullable=True
                )

    with op.batch_alter_table("message", schema=None) as batch_op:
        if migration.column_exists(table_name="message", column_name="text", conn=conn):
            columns = inspector.get_columns("message")
            text_column = next((column for column in columns if column["name"] == "text"), None)
            if text_column is not None and isinstance(text_column["type"], sa.VARCHAR):
                batch_op.alter_column(
                    "text", existing_type=sa.VARCHAR(), type_=sa.Text(), existing_nullable=True
                )

    # ### end Alembic commands ###


def downgrade() -> None:
    conn = op.get_bind()
    # ### commands auto generated by Alembic - please adjust! ###
    inspector = Inspector.from_engine(conn)  # type: ignore
    with op.batch_alter_table("message", schema=None) as batch_op:
        if migration.column_exists(table_name="message", column_name="text", conn=conn):
            columns = inspector.get_columns("message")
            text_column = next((column for column in columns if column["name"] == "text"), None)
            if text_column is not None and isinstance(text_column["type"], sa.VARCHAR):
                batch_op.alter_column(
                    "text", existing_type=sa.VARCHAR(), type_=sa.Text(), existing_nullable=True
                )

    with op.batch_alter_table("vertex_build", schema=None) as batch_op:
        if migration.column_exists(table_name="vertex_build", column_name="params", conn=conn):
            columns = inspector.get_columns("vertex_build")
            params_column = next((column for column in columns if column["name"] == "params"), None)
            if params_column is not None and isinstance(params_column["type"], sa.VARCHAR):
                batch_op.alter_column(
                    "params", existing_type=sa.VARCHAR(), type_=sa.Text(), existing_nullable=True
                )
    # ### end Alembic commands ###