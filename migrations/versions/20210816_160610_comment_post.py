"""comment/post

Revision ID: 25f84b89a7fd
Revises: db418e582c48
Create Date: 2021-08-16 16:06:10.882821

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '25f84b89a7fd'
down_revision = 'db418e582c48'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('posts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('caption', sa.String(length=100), nullable=False),
    sa.Column('pic_url', sa.String(length=255), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('timestamp', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('caption', sa.String(length=255), nullable=False),
    sa.Column('post_id', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('timestamp', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['post_id'], ['posts.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('likes',
    sa.Column('userId', sa.Integer(), nullable=True),
    sa.Column('postId', sa.Integer(), nullable=True),
    sa.Column('timestamp', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['postId'], ['posts.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], )
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('likes')
    op.drop_table('comments')
    op.drop_table('posts')
    # ### end Alembic commands ###
