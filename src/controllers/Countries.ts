import { Context } from 'koa';
import { PrismaClient } from '@prisma/client';
import { CountryType } from '@/types/CountryType';

const prisma = new PrismaClient();

class CountryController {
  public static async create(ctx: Context):Promise<void> {
    const { name }: CountryType = ctx.request.body;

    const createdCountry = await prisma.countries.create({
      data: { name },
    });

    ctx.status = 201;
    ctx.body = createdCountry;
  }

  public static async update(ctx: Context):Promise<void> {
    const { id } = ctx.params;
    const { name } = ctx.request.body;

    const updatedCountry = await prisma.countries.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
      },
    });

    ctx.body = updatedCountry;
  }

  public static async delete(ctx: Context):Promise<void> {
    const { id } = ctx.params;

    const deletedCountry = await prisma.countries.delete({
      where: {
        id: Number(id),
      },
    });

    ctx.body = deletedCountry;
  }

  public static async getOne(ctx: Context):Promise<void> {
    const { id } = ctx.params;

    const countries = await prisma.countries.findUnique({
      where: {
        id: Number(id),
      },
    });

    ctx.body = countries;
    ctx.status = countries ? 200 : 204;
  }

  public static async getAll(ctx: Context):Promise<void> {
    const countries = await prisma.countries.findMany();

    ctx.body = countries;
    ctx.status = countries.length > 0 ? 200 : 204;
  }
}

export default CountryController;
