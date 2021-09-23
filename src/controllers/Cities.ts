import { Context } from 'koa';
import { PrismaClient } from '@prisma/client';
import { CityType } from '@/types/CityType';

const prisma = new PrismaClient();

class CityController {
  public static async create(ctx: Context):Promise<void> {
    const { name, state, countryId }: CityType = ctx.request.body;

    const createdCity = await prisma.cities.create({
      data: {
        name,
        state,
        countryId: Number(countryId),
      },
    });

    ctx.status = 201;
    ctx.body = createdCity;
  }

  public static async update(ctx: Context):Promise<void> {
    const { id } = ctx.params;
    const { name, state, countryId } = ctx.request.body;

    const updatedCity = await prisma.cities.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        state,
        countryId: Number(countryId),
      },
    });

    ctx.body = updatedCity;
  }

  public static async delete(ctx: Context):Promise<void> {
    const { id } = ctx.params;

    const deletedCity = await prisma.cities.delete({
      where: {
        id: Number(id),
      },
    });

    ctx.body = deletedCity;
  }

  public static async getOne(ctx: Context):Promise<void> {
    const { id } = ctx.params;

    const countries = await prisma.cities.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        country: true,
      },
    });

    ctx.body = countries;
    ctx.status = countries ? 200 : 204;
  }

  public static async getAll(ctx: Context):Promise<void> {
    const countries = await prisma.cities.findMany({
      include: {
        country: true,
      },
    });

    ctx.body = countries;
    ctx.status = countries.length > 0 ? 200 : 204;
  }
}

export default CityController;
